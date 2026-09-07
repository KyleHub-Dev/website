import type { ProjectEntry } from '../data/site';

export interface RepoStats {
  ok: boolean;
  description: string | null;
  stars: number;
  forks: number;
  openIssues: number;
  openPRs: number;
  archived: boolean;
  language: string | null;
  pushedAt: string | null;
}

const emptyStats = (): RepoStats => ({
  ok: false,
  description: null,
  stars: 0,
  forks: 0,
  openIssues: 0,
  openPRs: 0,
  archived: false,
  language: null,
  pushedAt: null,
});

const ghToken = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;

const githubHeaders = {
  'User-Agent': 'kylehub.dev-static-build',
  Accept: 'application/vnd.github+json',
  ...(ghToken ? { Authorization: `Bearer ${ghToken}` } : {}),
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
): Promise<RepoStats> => {
  try {
    const [repoRes, openPRs] = await Promise.all([
      fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers: githubHeaders }),
      fetchGitHubOpenPRs(owner, repo),
    ]);
    if (!repoRes.ok) return emptyStats();

    const data = await repoRes.json();
    const issuesPlusPRs = data.open_issues_count ?? 0;
    return {
      ok: true,
      description: data.description ?? null,
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
      openIssues: Math.max(0, issuesPlusPRs - openPRs),
      openPRs,
      archived: !!data.archived,
      language: data.language ?? null,
      pushedAt: data.pushed_at ?? null,
    };
  } catch {
    return emptyStats();
  }
};

export const fetchStatsForProjects = async (projects: ProjectEntry[]) => {
  const statsList = await Promise.all(
    projects.map((project) => fetchGitHubStats(project.owner, project.repo)),
  );
  return new Map(projects.map((project, index) => [project.name, statsList[index]]));
};
