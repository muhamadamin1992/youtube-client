import { IThumbnail } from './thumbnail.model';

export interface ICard {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: IThumbnail,
      medium: IThumbnail,
      high: IThumbnail,
      maxres: IThumbnail,
    },
    channelTitle: string,
    tags: string[],
    categoryId: string,
    liveBroadcastContent: string,
    localized: {
      title: string,
      description: string,
    },
    defaultAudioLanguage: string,
  },
  statistics: {
    viewCount: string,
    likeCount: string,
    dislikeCount: string,
    favoriteCount: string,
    commentCount: string,
  }
}