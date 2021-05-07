import React from 'react'

const NewsMiddleSection: React.FC <Params> = (params) => {

  const items: Array <Props> = [
    {
      imageURL: 'https://www.sunstar.com.ph/uploads/images/2021/04/13/280014.jpg',
      title: 'Mayor plans to allow ‘online sabong’',
      link: 'https://www.sunstar.com.ph/article/1891582/Davao/Local-News/Mayor-plans-to-allow-online-sabong?fbclid=IwAR0Saz6iWKRAQi649sR9oq3qwjChmjRTFR0W5-mGq68qzyxaJ9-9imfX_Bg'
    },
    {
      imageURL: 'https://tribune.net.ph/wp-content/uploads/2018/06/sabong-fr-sabong-sports.jpg',
      title: 'House approves legalization of online ‘sabong’',
      link: 'https://mb.com.ph/2020/12/10/house-approves-legalization-of-online-sabong/?fbclid=IwAR2tFZrXgE1MGyKcAwafe-kkGYipIDjSaJZuEUzGR0ABobyv6-bqCVL-m1M'
    },
    {
      imageURL: 'https://i0.wp.com/bombay.today/wp-content/uploads/2021/04/New-Images10-300x188.gif?fit=300%2C188&ssl=1',
      title: 'China Online Gaming Market Report 2021-2027 - eSports is One of the Main Reasons for Market Growth as Competitions are Broadcasted Online',
      link: 'https://www.prnewswire.com/news-releases/china-online-gaming-market-report-2021-2027---esports-is-one-of-the-main-reasons-for-market-growth-as-competitions-are-broadcasted-online-301285933.html?fbclid=IwAR0q8fFuy7mfCVhd1vJ_1UgqEfSfplALXsFTroOIccVFjjE8R6utz9Pwlyw'
    }
  ]

  return (
    <div className  = 'news--mid'>
      <ul className = 'news--mid--list'>
        {
          items.map (({ title, imageURL, link }: Props, i: number) => {
            return <li key = { i } className = 'news--mid--list--item'>
              <a href = { link } type = '_blank' rel = 'noreferrer noopener' className = 'news--mid--list--item--link'>
                <img src = { imageURL } alt = '' className = 'news--mid--list--item--link--img' />
                <h4 className = 'news--mid--list--item--link--title'>{ title }</h4>
              </a>
            </li>
          })
        }
      </ul>
    </div>
  )
}

interface Params {}

interface Props {
  imageURL: string
  title: string,
  link: string
}

export default NewsMiddleSection
