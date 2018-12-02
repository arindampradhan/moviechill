import React, {Suspense, lazy} from 'react'

const PageComponent = lazy(() => import("./index"));

export const Loadable = () => (
    <Suspense fallback={<div>Loading ...</div>}>
        <PageComponent/>
    </Suspense>
)
export default Loadable