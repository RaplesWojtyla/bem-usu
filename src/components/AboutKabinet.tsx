import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

type KabinetType = {
  imgURL: string
  nama: string
}

const AboutKabinet = ({ kabinet }: { kabinet: Array<KabinetType> }) => {
  return (
    <div className="mt-16 text-center mb-20">

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {kabinet.map((obj, index) => (
          <Card
            key={index}
            className="w-[220px] transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <CardContent className="p-3">
              <div className="h-[200px] overflow-hidden rounded-md">
                <Image
                  className="object-cover"
                  src={obj.imgURL}
                  alt={obj.nama}
                  width={300}
                  height={200}
                />
              </div>
              <p className="mt-3 mb-10 font-semibold text-sm">{obj.nama}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AboutKabinet
