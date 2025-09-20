import React from 'react'
import Image from 'next/image'

export default function directors() {
  return (
    <>
      <section className="md:px-32 px-4 md:pt-12 pb-4 relative text-black bg-[url('/background.png')] md:bg-cover bg-contain bg-no-repeat bg-bottom">
        <div className='w-[80%] mx-auto'>
          <Image src="/team.png" alt="directors" width={1000} height={100} className='w-full h-auto' />
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-30'>
          <div className='md:px-4 px-0'>
            <Image src="/member1.png" alt="directors" width={1000} height={100} className='w-full h-[350px] object-cover rounded-2xl' />
            <p className='text-black text-lg font-bold block md:hidden pt-4'>Karina Ozuna (Title: President Chairman)
              Karina holds an M.ED in Education and a BA in Early Childhood Education and Special Needs. She is CDA certified and has earned an Advanced Certificate in Human Resources. As the founder and owner of Vibrant Minds Curriculum, she brings both educational expertise and leadership experience to the board. Karina has over a decade of experience in curriculum development for early learners, with a special focus on inclusion and differentiated learning. Her passion lies in empowering educators and families through culturally relevant and developmentally appropriate practices.</p>
          </div>
          <div className='md:px-4 px-0'>
            <Image src="/member2.jpg" alt="directors" width={1000} height={100} className='w-full h-[350px] object-cover rounded-2xl' />
            <p className='text-black text-lg font-bold block md:hidden pt-4'>Denny is a seasoned child care professional with ownership and operational experience across three licensed group family daycare programs. She holds an Associate’s degree in Accounting and combines his financial acumen with hands-on expertise in early childhood care. Denny has been instrumental in mentoring new providers and streamlining compliance processes across multiple sites. Her leadership style emphasizes quality care, community trust, and program sustainability. Denny brings practical insight into running successful daycares and scaling best practices across networks.</p>
          </div>
          <div className='md:px-4 px-0'>
            <Image src="/member3.png" alt="directors" width={1000} height={100} className='w-full h-[350px] object-cover rounded-2xl' />
            <p className='text-black text-lg font-bold block md:hidden pt-4'>Jeannette Tomala (Title: Lead Administrator)
              Jeannette brings a strong background in business management, supported by her Associate’s degree in the field. She has over 15 years of experience in clerical and administrative roles, including scheduling, file management, and recordkeeping for child care programs. Her attention to detail and organizational skills support the documentation and compliance needs of the CACFP program. Jeannette has a keen understanding of office systems and ensures timely and accurate reporting. She is committed to ensuring that the sponsor’s administrative foundation is strong, efficient, and audit-ready.
            </p>
          </div>
        </div>
      </section>
      <div className='grid-cols-3 gap-20 px-32 py-6 hidden md:grid '>
        <p className='text-black text-lg font-bold'>Karina Ozuna (Title: President Chairman)
          Karina holds an M.ED in Education and a BA in Early Childhood Education and Special Needs. She is CDA certified and has earned an Advanced Certificate in Human Resources. As the founder and owner of Vibrant Minds Curriculum, she brings both educational expertise and leadership experience to the board. Karina has over a decade of experience in curriculum development for early learners, with a special focus on inclusion and differentiated learning. Her passion lies in empowering educators and families through culturally relevant and developmentally appropriate practices.</p>
        <p className='text-black text-lg font-bold'>Denny is a seasoned child care professional with ownership and operational experience across three licensed group family daycare programs. She holds an Associate’s degree in Accounting and combines her financial acumen with hands-on expertise in early childhood care. Denny has been instrumental in mentoring new providers and streamlining compliance processes across multiple sites. Her leadership style emphasizes quality care, community trust, and program sustainability. Denny brings practical insight into running successful daycares and scaling best practices across networks.</p>
        <p className='text-black text-lg font-bold'>Jeannette Tomala (Title: Lead Administrator)
          Jeannette brings a strong background in business management, supported by her Associate’s degree in the field. She has over 15 years of experience in clerical and administrative roles, including scheduling, file management, and recordkeeping for child care programs. Her attention to detail and organizational skills support the documentation and compliance needs of the CACFP program. Jeannette has a keen understanding of office systems and ensures timely and accurate reporting. She is committed to ensuring that the sponsor’s administrative foundation is strong, efficient, and audit-ready.
        </p>
      </div>
    </>
  )
}
