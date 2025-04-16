import type { OembedData } from '@extractus/oembed-extractor';

export type OembedField = {
  url: string;
  oembed: OembedData;
  thumbnail: string;
};
