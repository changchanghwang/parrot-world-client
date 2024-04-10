import { stringify } from "qs";
import { httpClient } from "@libs/http-client";
import { queryKeyMap } from "@libs/query";
import { ArticleModel } from "@models";

export const articleRepository = {
  async list(params: { page: number; limit: number }) {
    return httpClient.get<{ items: ArticleModel[]; count: number }>(
      "/articles",
      {
        params,
        paramsSerializer: (params) => {
          return stringify(params, { arrayFormat: "repeat" });
        },
      }
    );
  },
};

queryKeyMap.set(articleRepository.list, ["Article"]);
