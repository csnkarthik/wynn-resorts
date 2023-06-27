import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import Image from 'next/image'

const options = {
  renderText: (text: string) => {
    return text.split('\n').reduce((children, textSegment, index): any => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, [])
  },

  renderMark: {
    [MARKS.CODE]: (text: any) => {
      return (
        <pre>
          <code>{text}</code>
        </pre>
      )
    }
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
      if (
        node.content.find((item: any) =>
          item.marks?.find((mark: any) => mark.type === 'code')
        )
      ) {
        return (
          <div>
            <pre>
              <code>{children}</code>
            </pre>
          </div>
        )
      }

      return <p>{children}</p>
    },

    [INLINES.ENTRY_HYPERLINK]: (node: any) => {
      if (node.data.target.sys.contentType.sys.id === 'post') {
        return (
          <Link href={`/dining/${node.data.target.fields.slug}`}>
            {node.data.target.fields.title}
          </Link>
        )
      }
    },

    [INLINES.HYPERLINK]: (node: any) => {
      const text = node.content.find((item: any) => item.nodeType === 'text')?.value
      return (
        <a href={node.data.uri} target='_blank' rel='noopener noreferrer'>
          {text}
        </a>
      )
    },

    [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
        return (
          <iframe
            height='400'
            width='100%'
            src={node.data.target.fields.embedUrl}
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        )
      }
    },


    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      return (
        <Image
          src={'https:' + node.data.target.fields.file.url}
          height={355}
          width={200}
          alt={node.data.target.fields.title}
          className=''
        />
      )
    }
  }
}

const RichText = ({ content }: any) => {
  return <>{documentToReactComponents(content, options)}</>
}

export default RichText