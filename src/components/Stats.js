export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numItemsPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You got everything ready to go ✈"
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numItemsPacked} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
