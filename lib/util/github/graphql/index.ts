import type { GithubHttp } from '../../http/github';
import { GithubGraphqlDatasourceFetcher } from './datasource-fetcher';
import { adapter as releasesAdapter } from './releases-adapter';
import { adapter as tagsAdapter } from './tags-adapter';
import type {
  GithubPackageConfig,
  GithubReleaseItem,
  GithubTagItem,
} from './types';

export async function queryTags(
  config: GithubPackageConfig,
  http: GithubHttp
): Promise<GithubTagItem[]> {
  const res = await GithubGraphqlDatasourceFetcher.query(
    config,
    http,
    tagsAdapter
  );
  return res;
}

export async function queryReleases(
  config: GithubPackageConfig,
  http: GithubHttp
): Promise<GithubReleaseItem[]> {
  const res = await GithubGraphqlDatasourceFetcher.query(
    config,
    http,
    releasesAdapter
  );
  return res;
}
