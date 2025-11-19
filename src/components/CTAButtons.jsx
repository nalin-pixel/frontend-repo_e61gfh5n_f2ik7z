export function PrimaryButton({ href = '#', children, className = '' }) {
  return (
    <a href={href} className={`inline-flex items-center justify-center px-5 py-3 rounded-md font-semibold text-black bg-[#00FF88] hover:opacity-90 transition ${className}`}>
      {children}
    </a>
  )
}

export function SecondaryButton({ href = '#', children, className = '' }) {
  return (
    <a href={href} className={`inline-flex items-center justify-center px-5 py-3 rounded-md font-semibold text-[#F5F5F5] border border-white/10 hover:border-[#00E5FF] hover:text-[#00E5FF] transition ${className}`}>
      {children}
    </a>
  )
}
