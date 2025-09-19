export async function GET({ params, request }) {
  const fileId = "16ap4ggxrZBXFPkUKrfc351hGPLWWkGOL";
  const directDownloadUrl = `/`;
  
  const response = await fetch(directDownloadUrl);
  const arrayBuffer = await response.arrayBuffer();

  return new Response(arrayBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Programa Preliminar foro HsI 15agosto2025.pdf"',
      "Content-Length": arrayBuffer.byteLength.toString()
    }
  });
}