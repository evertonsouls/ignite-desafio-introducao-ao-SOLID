/* eslint-disable @typescript-eslint/naming-convention */

declare module "http" {
  interface IncomingHttpHeaders {
    user_id: string;
  }
}
