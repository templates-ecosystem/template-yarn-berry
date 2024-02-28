import type { ComponentType } from 'react'
import type { GetServerSideProps } from 'next'
import Head from 'next/head.js'

interface IndexProps {
  title: string
}

const Index: ComponentType<IndexProps> = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>

        <meta key="title" content="Home" property="og:title" />
      </Head>

      Test
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  const props: IndexProps = {
    title: 'Test'
  }

  return {
    props
  }
}

export default Index