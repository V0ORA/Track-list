export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPerc = Math.round((numPacked * 100) / numItems);

  return (
    <footer className="stats">
      <em>
        {packedPerc === 100
          ? "You got everything! Ready to go ✈️ "
          : `💼 You have ${numItems} items on your list, and you have already packed
             ${numPacked} (${!numItems ? "0" : packedPerc}%)`}
      </em>
    </footer>
  );
}
