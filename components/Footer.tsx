export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} 게임학교. All rights reserved.</p>
        <p className="opacity-80">Built with Next.js • Deployed on Vercel</p>
      </div>
    </footer>
  )
}
