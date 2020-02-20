import React from "react";

const Message = props => {
  if (props.lang === "pl")
    return (
      <h3>
        Witamy w naszym kursie języka islandzkiego dla początkujących! Załóż
        konto by zacząć naukę.
      </h3>
    );
  if (props.lang === "en")
    return (
      <h3>
        Welcome to our Icelandic course for beginners! Please create an account
        to proceed.
      </h3>
    );
  if (props.lang === "no")
    return (
      <h3>
        Velkommen til kurs i islandsk for nybegynnere! Skape gjerne kontoen for
        at fortsette.
      </h3>
    );
  if (props.lang === "sw")
    return (
      <h3>
        Välkommen till kurs i isländska för nybörjare! Skapa gärna kontot för
        att förtsätta.
      </h3>
    );
  if (props.lang === "de")
    return (
      <h3>
        Willkommen zu unserem Isländischkurs für Anfänger! Bitte erstellen Sie
        ein Konto          fortfahren.
      </h3>
    );
};

export default Message;
