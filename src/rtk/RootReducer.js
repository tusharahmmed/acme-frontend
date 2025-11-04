import { baseApi } from "./features/api/baseApi";
import { docReducer } from "./features/doc/docSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  doc: docReducer,
};
