import Vue from "vue";
import jsPDF from "jspdf";

if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true;
  Vue.mixin({
    methods: {
      generatePDF(menu, download) {
        const doc = new jsPDF();
        //set background color
        doc.setFillColor(255, 245, 236);

        //add poppins ttf from font folder
        doc.addFont("font/Roboto-Black.ttf", "Roboto", "black");
        doc.addFont("font/Roboto-BlackItalic.ttf", "Roboto", "black-italic");
        doc.addFont("font/Roboto-Bold.ttf", "Roboto", "bold");
        doc.addFont("font/Roboto-BoldItalic.ttf", "Roboto", "bold-italic");
        doc.addFont("font/Roboto-Italic.ttf", "Roboto", "italic");
        doc.addFont("font/Roboto-Light.ttf", "Roboto", "light");
        doc.addFont("font/Roboto-LightItalic.ttf", "Roboto", "light-italic");
        doc.addFont("font/Roboto-Medium.ttf", "Roboto", "medium");
        doc.addFont("font/Roboto-MediumItalic.ttf", "Roboto", "medium-italic");
        doc.addFont("font/Roboto-Thin.ttf", "Roboto", "thin");
        doc.addFont("font/Roboto-ThinItalic.ttf", "Roboto", "thin-italic");

        doc.setFont("Roboto", "black");
        doc.setFontSize(35);
        doc.text(20, 25, menu.title.toUpperCase());
        doc.setFontSize(12);
        doc.setFont("Roboto", "medium");
        doc.text(20, 30, menu.subtitle ? menu.subtitle : "");

        doc.addImage("/kostbar_logo.png", "PNG", 155, 270, 30, 10);

        let currentTop = 55;
        let currentLeft = 35;

        menu.speisen.forEach((item, index) => {
          doc.setFontSize(12);
          doc.setFont("Roboto", "bold-italic");
          doc.setTextColor(232, 52, 20);
          doc.text(20, currentTop, (index + 1 < 10 ? "0" : "") + (index + 1));

          doc.setTextColor(0, 0, 0);
          doc.text(currentLeft, currentTop, item.food.toUpperCase());
          doc.setFontSize(10);
          doc.setFont("Roboto", "light");
          doc.text(
            currentLeft,
            currentTop + 5,
            item.garnish ? item.garnish.toUpperCase() : ""
          );
          // set price on the right
          doc.setFontSize(10);
          doc.setFont("Roboto", "black-italic");
          doc.text(
            185,
            currentTop,
            item.price.toFixed(1).toString() + " €",
            "right"
          );
          //get width of the text
          let textUppercase = item.food.toUpperCase();
          let width = doc.getTextDimensions(textUppercase);
          let priceWidth = doc.getTextDimensions(
            item.price.toFixed(1).toString() + " €"
          );

          //draw a line between the text and the price
          doc.setLineWidth(0.1);
          doc.setDrawColor(200, 200, 200);
          doc.setLineDash([1, 2]);
          doc.line(
            width.w + (35 + 20),
            currentTop,
            180 - priceWidth.w,
            currentTop
          );

          if (item.garnish) {
            currentTop += 17;
          } else {
            currentTop += 12;
          }
        });

        //draw a horizontal line between the index and the title
        doc.setLineDash([0, 0]);
        doc.setLineWidth(0.1);
        doc.setDrawColor(200, 200, 200);
        doc.line(30, 50, 30, currentTop - 10);

        //contact info
        doc.setFontSize(10);
        doc.setFont("Roboto", "bold");
        doc.text(20, 274, "Langestraße 109, 79183 Waldkirch");
        doc.text(20, 279, "Bestellen unter: 0761 242 627 28");
        if (download) {
          doc.save(`${menu.title}.pdf`);
        } else {
          //return file
          return doc.output();
        }
      },
    },
  });
}
