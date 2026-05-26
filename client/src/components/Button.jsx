function Button({ text }) {
  return (
    <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-semibold">
      {text}
    </button>
  )
}

export default Button