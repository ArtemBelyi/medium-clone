import { ArticleInterface } from './article.interface';

export interface FeedResponseInterface {
  articles: Array<ArticleInterface>;
  articlesCount: number;
}
