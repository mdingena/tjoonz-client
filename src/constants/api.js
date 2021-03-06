export const BASE_URL = 'https://www.tjoonz.com/system/wp-json';

export const BASE_STREAM_URL = 'https://www.tjoonz.com/stream.php?id=';
export const BASE_DOWNLOAD_URL = 'https://www.tjoonz.com/download.php?id=';

export const ENDPOINTS = {
  COMMENTS: '/wp/v2/comments',
  DOWNVOTE: '/tjnz/v1/downvote',
  MY_COLLECTIONS: '/tjnz/v1/collections',
  JWT: '/jwt-auth/v1/token',
  JWT_VALIDATION: '/jwt-auth/v1/token/validate',
  MIXES: '/wp/v2/posts',
  UPVOTE: '/tjnz/v1/upvote'
};

export const FACETTED_SEARCH_OPTIONS_TTL = 10800000; // Three hours.

export const ITEMS_PER_PAGE = 30;
