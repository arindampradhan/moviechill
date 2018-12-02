import React, { Suspense, lazy } from 'react'
import Loader from '../../components/Loader'
const PageComponent = lazy(() => import("./index"));

export const Loadable = () => (
    <Suspense fallback={<Loader />}>
        <PageComponent />
    </Suspense>
)
export default Loadable