import { Outlet } from 'react-router-dom'
import PageHeader from './components/PageHeader/PageHeader'
import PageDown from './components/PageDown/PageDown'
import useAPI from './hooks/useAPI'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

const Root = () => {
  const { data, loading, error } = useAPI('categories')
  if (loading) return 
  if (error) return <PageDown />

  return (
    <ErrorBoundary>
      <PageHeader furnitureDetails={data || []} />
      <main style={{ marginTop: '72px' }}>
        <Outlet />
      </main>
    </ErrorBoundary>
  )
}

export default Root
