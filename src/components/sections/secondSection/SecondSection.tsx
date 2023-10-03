import React from 'react'
import { Container } from 'components/container/Container'
import schemaImage from '../../../assets/images/secondSection/second-section-schema.svg'
import './SecondSection.css'

interface BadgeItemProps {
  title: string
  badgeList: string[]
}

const badgeItems: string[] = [
  'PostgreSQL',
  'MySQL',
  'SQLite',
  'SQL Server',
  'MongoDB',
  'CockroachDB',
]

export function SecondSection(): JSX.Element {
  return (
    <div className="second-section">
      <Container>
        <div className="flex justify-between items-center mb-[88px] lg:gap-[0] gap-[32px] lg:flex-row flex-col">
          <div className="lg:max-w-[621px] w-full lg:pr-[51px]">
            <div className="fontBarlow text-[20px] uppercase mb-[8px] text-[#a0aec0] leading-[100%] tracking-[0.1em] font-bold">
              Prisma schema
            </div>
            <h2 className="text-[#2d3748] mb-[18px] text-[32px] lg:text-[48px] fontBarlow font-bold tracking-[-0.02em] leading-[110%]">
              Data model you can read
            </h2>
            <p className="text-[20px] leading-[140%] mb-[50px] textNormal">
              The Prisma schema is intuitive and lets you declare your database
              tables in a human-readable way — making your data modeling
              experience a delight. You define your models by hand or introspect
              them from an existing database.
            </p>
            <a
              href="./docs/concepts/components/prisma-schema"
              className="inline-block leading-[1] rounded-[6px] pointer fontInter font-bold text-[18px] bg-[#16a394] border border-[#16a394] text-white py-[16px] px-[24px] lg:w-fit w-full hover:bg-[#187367] hover:border-[#187367]"
            >
              Learn more about Prisma Schema
            </a>
          </div>
          <div className="max-w-[570px] w-full ">
            <img src={schemaImage} width="570" height="522" alt="" />
            <a href="./docs/concepts/components/prisma-schema">{'\u00A0'}</a>
          </div>
        </div>
      </Container>
      <Container>
        <div className="badge-section flex justify-between gap-[48px] mb-[100px] md:flex-row flex-col">
          <BadgeItem
            title="Supported Languages"
            badgeList={['JavaScript', 'TypeScript']}
          />
          <BadgeItem title="Supported Databases" badgeList={badgeItems} />
        </div>
      </Container>
    </div>
  )
}

function BadgeItem({ title, badgeList }: BadgeItemProps): JSX.Element {
  return (
    <div className="max-w-[275px] pointer w-full relative group">
      <a href="./stack">
        <span className="text-[18px] fontBarlow block mb-[32px] text-[#a0aec0] uppercase tracking-[0.1em] leading-[100%] group-hover:opacity-50">
          {title}
        </span>
        <div className="badge-list group-hover:opacity-50">
          {badgeList.map((badge, index) => (
            <div className="badge-item" key={index}>
              {badge}
            </div>
          ))}
        </div>
        <div className="hidden whitespace-nowrap p-[8px] bg-[#e2e8f0] text-[#4a5568] absolute left-[50%] top-[50%] font-bold rounded-[6px] translate-x-[-50%] translate-y-[-50%] z-[100] group-hover:block">
          Prisma in your stack -&gt;
        </div>
      </a>
    </div>
  )
}
