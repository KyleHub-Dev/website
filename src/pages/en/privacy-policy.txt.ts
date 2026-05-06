import type { APIRoute } from 'astro';
import { legalDocs } from '../../data/legal';
import { renderDocAsText, textResponse } from '../../lib/legal-text';

export const prerender = true;

export const GET: APIRoute = () =>
  textResponse(renderDocAsText(legalDocs['en-privacy'], 'en'));
