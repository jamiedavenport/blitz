import {queryCache} from 'react-query'

export interface QueryCacheFunctions<ReturnType> {
  mutate: (updater: ReturnType | ((oldData: ReturnType) => ReturnType)) => void
}

export const queryCacheFunctions = (queryKey: string) => ({
  mutate: (updater: any) => {
    queryCache.setQueryData(queryKey, updater)
    setTimeout(() => {
      queryCache.refetchQueries(queryKey, {force: true})
    }, 1000)
  },
})
