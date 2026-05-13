import type { ProjectEntry, ProjectHost, ProjectLink, ProjectVisibility } from '../data/site';

export interface RepoStats {
  ok: boolean;
  host: ProjectHost;
  description: string | null;
  stars: number;
  forks: number;
  openIssues: number;
  openPRs: number;
  archived: boolean;
  language: string | null;
  pushedAt: string | null;
  visibility?: ProjectVisibility;
}

const emptyStats = (host: ProjectHost, visibility?: ProjectVisibility): RepoStats => ({
  ok: false,
  host,
  description: null,
  stars: 0,
  forks: 0,
  openIssues: 0,
  openPRs: 0,
  archived: false,
  language: null,
  pushedAt: null,
  visibility,
});

const ghToken = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
const codebergToken = import.meta.env.CODEBERG_TOKEN ?? process.env.CODEBERG_TOKEN;

const githubHeaders = {
  'User-Agent': 'kylehub.dev-static-build',
  Accept: 'application/vnd.github+json',
  ...(ghToken ? { Authorization: `Bearer ${ghToken}` } : {}),
};

const codebergHeaders = {
  'User-Agent': 'kylehub.dev-static-build',
  Accept: 'application/json',
  ...(codebergToken ? { Authorization: `token ${codebergToken}` } : {}),
};

const fetchGitHubOpenPRs = async (owner: string, repo: string): Promise<number> => {
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/pulls?state=open&per_page=1`,
    { headers: githubHeaders },
  );
  if (!res.ok) return 0;

  const link = res.headers.get('link') ?? '';
  const lastPage = link.match(/[?&]page=(\d+)>;\s*rel="last"/);
  if (lastPage) return parseInt(lastPage[1], 10);

  const data = await res.json();
  return Array.isArray(data) ? data.length : 0;
};

const fetchGitHubStats = async (
  owner: string,
  repo: string,
  visibility?: ProjectVisibility,
): Promise<RepoStats> => {
  try {
    const [repoRes, openPRs] = await Promise.all([
      fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers: githubHeaders }),
      fetchGitHubOpenPRs(owner, repo),
    ]);
    if (!repoRes.ok) return emptyStats('github', visibility);

    const data = await repoRes.json();
    const issuesPlusPRs = data.open_issues_count ?? 0;
    return {
      ok: true,
      host: 'github',
      description: data.description ?? null,
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
      openIssues: Math.max(0, issuesPlusPRs - openPRs),
      openPRs,
      archived: !!data.archived,
      language: data.language ?? null,
      pushedAt: data.pushed_at ?? null,
      visibility,
    };
  } catch {
    return emptyStats('github', visibility);
  }
};

const fetchCodebergStats = async (
  owner: string,
  repo: string,
  visibility?: ProjectVisibility,
): Promise<RepoStats> => {
  try {
    const res = await fetch(`https://codeberg.org/api/v1/repos/${owner}/${repo}`, {
      headers: codebergHeaders,
    });
    if (!res.ok) return emptyStats('codeberg', visibility);

    const data = await res.json();
    return {
      ok: true,
      host: 'codeberg',
      description: data.description || null,
      stars: data.stars_count ?? 0,
      forks: data.forks_count ?? 0,
      openIssues: data.open_issues_count ?? 0,
      openPRs: data.open_pr_counter ?? 0,
      archived: !!data.archived,
      language: data.language || null,
      pushedAt: data.updated_at ?? null,
      visibility,
    };
  } catch {
    return emptyStats('codeberg', visibility);
  }
};

export const fetchRepoStats = async (
  link: ProjectLink,
  visibility?: ProjectVisibility,
): Promise<RepoStats | null> => {
  if (!link.owner || !link.repo) return null;
  if (link.host === 'github') return fetchGitHubStats(link.owner, link.repo, visibility);
  return fetchCodebergStats(link.owner, link.repo, visibility);
};

export const getPrimaryStatsLink = (project: ProjectEntry): ProjectLink | undefined =>
  project.links.find((link) => link.primary) ?? project.links[0];

export const fetchStatsForProjects = async (projects: ProjectEntry[]) => {
  const statProjects = projects.filter((project) => project.stats !== false);
  const statsList = await Promise.all(
    statProjects.map((project) => {
      const link = getPrimaryStatsLink(project);
      return link ? fetchRepoStats(link, project.visibility) : Promise.resolve(null);
    }),
  );

  const statsByProject = new Map<string, RepoStats>();
  statProjects.forEach((project, index) => {
    const stats = statsList[index];
    if (stats) statsByProject.set(project.name, stats);
  });

  return statsByProject;
};
