import React from 'react'
import {withContent} from '../../components/locale'
import Layout from '../../components/layout'
import PageSections from '../../components/page-sections'

function Basics({url, content, locale}) {
  return (
    <Layout pathname={url ? url.pathname : ''} locale={locale}>
      <PageSections data={content} />
    </Layout>
  )
}

export default withContent({page: 'basics'}, Basics)
