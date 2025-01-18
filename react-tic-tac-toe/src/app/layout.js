export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tic Tac Toe</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}