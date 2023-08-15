import { AuthStateInterface } from './authState.interface';
import { FeedStateInterface } from './feedState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
}
