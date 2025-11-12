export type Player = {
  slug: string
  name: string
  race: 'Terran' | 'Zerg' | 'Protoss' | '기타'
  position: string
  winRate: number
  image: string
  bio: string
}

export const history: { year: string; event: string }[] = [
  { year: '2018', event: '게임학교 창단' },
  { year: '2020', event: '프로 리그 진출' },
  { year: '2023', event: '국내 대학 e스포츠 리그 우승' }
]

export const orgRoot = {
  name: '게임학교',
  title: 'Game School',
  children: [
    { name: '감독 김코치', title: 'Head Coach' },
    {
      name: '선수단',
      children: [
        { name: 'A팀', children: [{ name: '주장 홍테란' }, { name: '이저그' }] },
        { name: 'B팀', children: [{ name: '박프로토스' }] }
      ]
    },
    { name: '분석/전략팀' },
  ]
}

export const records = [
  { season: '2023 Spring', wins: 18, losses: 6, draws: 1 },
  { season: '2023 Summer', wins: 15, losses: 9, draws: 0 },
  { season: '2024 Spring', wins: 20, losses: 5, draws: 0 }
]

export const rosterByRace = {
  Terran: 4,
  Zerg: 3,
  Protoss: 3,
  기타: 1
}

export const coach = {
  name: '김코치',
  image: '/players/coach.jpg',
  career: [
    '전 프로게이머 출신',
    '전략분석 10년 경력',
    '국가대표 코칭 스태프 경험'
  ],
  bio: '데이터 기반 피드백과 팀워크를 중시하는 리더십으로 팀을 이끌고 있습니다.'
}

export const players: Player[] = [
  {
    slug: 'hong-terran',
    name: '홍테란',
    race: 'Terran',
    position: '주장 / 메인 딜러',
    winRate: 72,
    image: '/players/hong-terran.jpg',
    bio: '정교한 타이밍과 컨트롤로 유명한 테란 메인.'
  },
  {
    slug: 'lee-zerg',
    name: '이저그',
    race: 'Zerg',
    position: '운영 / 스노우볼',
    winRate: 66,
    image: '/players/lee-zerg.jpg',
    bio: '초중반 운영으로 흐름을 주도하는 저그 플레이어.'
  },
  {
    slug: 'park-protoss',
    name: '박프로토스',
    race: 'Protoss',
    position: '멀티 역할 / 한타',
    winRate: 61,
    image: '/players/park-protoss.jpg',
    bio: '교전 설계와 한타 각을 보는 눈이 뛰어남.'
  }
]
