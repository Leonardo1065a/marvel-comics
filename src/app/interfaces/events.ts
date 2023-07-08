import { ThumbnailData } from './thumbnail';

export interface EventData {
  identifier: string;

  id: string;

  title: string;

  description: string;

  thumbnail: ThumbnailData;
}
