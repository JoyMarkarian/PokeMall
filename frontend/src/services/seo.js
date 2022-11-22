const editMeta = (title, description) => {
  document.getElementsByTagName("META")[2].content = description;
  document.title = `Poke Mall | ${title}`;
};

export default editMeta;
