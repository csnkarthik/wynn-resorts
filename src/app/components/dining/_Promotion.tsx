import Link from "next/link"
import Image from "next/image"

export const PromotionItem = ({ item }: any) => {
  const { name, shortDescription, thumbImage, slug, link } = item.fields
  const urlLink: string = link ? link : ('/landing/' + slug)
  const targetBlank: any = link ? "_blank" : ''

  return (
    <div className="item">
      <div className="pic">
        <Image
          alt={`Cover Image for ${name}`}
          src={'https:' + thumbImage?.fields.file.url}
          width={thumbImage?.fields.file.details.image.width}
          height={thumbImage?.fields.file.details.image.height}
          className="card-img-top" />
      </div>
      <div className="content">
        <h2>{name}</h2>
        <p>{shortDescription}</p>
        <Link className="btn btn-primary" href={urlLink} target={targetBlank}>Read More</Link>
      </div>
    </div>
  )

}

const Promotion = ({ promotion }: any) => {
  return (
    <section className="promotion">
      <div className="container">
        {promotion.promotion?.map((item: any, i: any) => <PromotionItem key={i} item={item} />)}
      </div>
    </section>
  )
}

export default Promotion
