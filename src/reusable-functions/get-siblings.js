export default function getSiblings(e) {
  var siblings = [];
  var sibling = e.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
}
