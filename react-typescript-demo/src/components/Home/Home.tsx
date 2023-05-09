import React, { useEffect, useState } from 'react'
import { ContractStatus, SeekerMsaControllerService } from '../../flexcub-api';

interface Props {}
const people = [
    {
      name: 'Calvin Hawkins',
      email: 'calvin.hawkins@example.com',
      image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]

function Home(props: Props) {
    const [posts, setPosts] = useState<ContractStatus[]>([]);
    useEffect(() => {
        // Update the document title using the browser API
     SeekerMsaControllerService.getContractStatus()
      .then((data) => {
        setPosts(data)
         console.log(data);
      })
      },[]);
  return (
    <ul className="divide-y divide-gray-200 m-5">
      {people.map((person) => (
        <li key={person.email} className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src={person?.image} height={200} width={200} alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
      ))}
        {posts.map((p) => (
        <li key={p.id} className="py-4 flex">
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{p.id}</p>
            <p className="text-sm text-gray-500">{p.status}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Home
