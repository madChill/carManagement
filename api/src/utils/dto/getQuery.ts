export interface IGetQuery {
  limit?: number;
  offset?: number;
  search?: string;
}

export type IGetFilter<T> = IGetQuery & T;
//? field1=hello,field2=hello2
