import { Inter } from 'next/font/google'
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

function Pokemon({data}: any) {
  return (
    <div>
        <div>名字：{data.name}</div>
        <div>身高：{data.height}</div>
        <div>体重：{data.weight}</div>
        <Image
            src={data.sprites.other["official-artwork"]}
            alt='test'
            height={500}
            width={500}
        />
   </div>
  )
}

export default Pokemon;

// 服务端渲染 每次请求执行
export  async function getServerSideProps(params: any) {
    const id = params.query.id;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then (data => data.json());
    return {
        props: {data: res}
    }
}

