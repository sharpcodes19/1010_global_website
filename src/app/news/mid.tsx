import React from 'react'

const NewsMid: React.FC <Params> = (params) => {

  const items: Array <Props> = [
    {
      title: 'Crown Perth to reopen after snap lockdown',
      url: {
        image: 'https://k7f6k2y7.stackpathcdn.com/asia-pacific/wp-content/uploads/sites/5/2021/05/Crown-Perth-reopen-doors.jpg',
        link: 'https://focusgn.com/asia-pacific/crown-perth-to-reopen-after-snap-lockdown'
      }
    },
    {
      title : 'House approves legalization of online ‘sabong’',
      url: {
        image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQFs2dxmzAEyCX5O&w=300&h=157&url=https%3A%2F%2Fmb.com.ph%2Fwp-content%2Fuploads%2F2020%2F07%2F220719_congress_03_alvin-kasiban.jpg&cfs=1&_nc_eui2=AeGoDjMXboSemOdt-Fu2cSIbuHTrgLPQZXW4dOuAs9BldSX9gImCfZHRjhuVi8_J31ps0TYROsFeLLC6upbsOWgW&ccb=3-5&_nc_hash=AQHlG_Z4F_6pFLLa',
        link: 'https://mb.com.ph/2020/12/10/house-approves-legalization-of-online-sabong/'
      }
    },
    {
      title : 'Mayor plans to allow ‘online sabong’',
      url: {
        image: 'https://www.sunstar.com.ph/uploads/images/2021/04/13/280014.jpg',
        link: 'https://www.sunstar.com.ph/article/1891582/Davao/Local-News/Mayor-plans-to-allow-online-sabong?fbclid=IwAR3jYKWETbOppblAY4fhR9isv-fuEiU2bFxXqE8lfp2zvEzKqI4IOYgmDZE'
      }
    }
  ]

  return (
    <div className = 'mid'>
      <ul>
        {
          items.map ((item: Props, i: number) => {
            return <li key = { i }>
              <a href = { item.url.link }>
                <div className = 'back'>
                  <h3 className = 'title'>{ item.title }</h3>
                </div>
                <div className = 'front'>
                  <img src = { item.url.image } alt = { item.title } />
                </div>
              </a>
            </li>
          })
        }
      </ul>
    </div>
  )
}

interface Props {
  url: {
    link: string
    image: string
  }
  title: string
}

interface Params {}

export default NewsMid
