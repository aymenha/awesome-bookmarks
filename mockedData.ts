import { name, internet, random } from "faker";

const itemsArray = new Array(
  random.number({
    min: 5,
    max: 15
  })
).fill(true);

const generateTags = () =>
  new Array(
    random.number({
      min: 1,
      max: 3
    })
  )
    .fill(true)
    .map(_ => random.word());

export const bookmarks = itemsArray.map(_ => {
  return {
    title: name.title(),
    url: internet.url(),
    tags: generateTags()
  };
});
