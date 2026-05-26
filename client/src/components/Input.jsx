function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition"
    />
  )
}

export default Input