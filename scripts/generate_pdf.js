import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateSponsorshipGuide() {
  const docsDir = path.resolve(process.cwd(), 'public/assets/docs');
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }

  const pdfDoc = await PDFDocument.create();
  const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const timesNormal = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Page 1
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();

  // Header banner
  page.drawRectangle({
    x: 0,
    y: height - 90,
    width: width,
    height: 90,
    color: rgb(0.71, 0.14, 0.16), // #B52428
  });

  page.drawText('HAPPY HANDS FOUNDATION', {
    x: 40,
    y: height - 42,
    size: 20,
    font: helveticaBold,
    color: rgb(1, 1, 1),
  });

  page.drawText('COMMUNITY DEVELOPMENT FOUNDATION • CAC RC 183177', {
    x: 40,
    y: height - 62,
    size: 10,
    font: helvetica,
    color: rgb(0.96, 0.87, 0.18), // #F5DD2F
  });

  // Title
  page.drawText('SCHOLARS PROGRAM — OFFICIAL SPONSORSHIP GUIDE', {
    x: 40,
    y: height - 125,
    size: 15,
    font: timesRoman,
    color: rgb(0.24, 0.19, 0.13),
  });

  // Quote
  page.drawRectangle({
    x: 40,
    y: height - 175,
    width: width - 80,
    height: 38,
    color: rgb(0.97, 0.96, 0.93),
  });

  page.drawText('"They\'re the reason we exist. But you\'re the reason this works."', {
    x: 52,
    y: height - 158,
    size: 12,
    font: timesNormal,
    color: rgb(0.36, 0.50, 0.17), // #5B7F2B
  });

  // Section 1: Overview
  let y = height - 205;
  page.drawText('1. About The Scholars Program', {
    x: 40,
    y,
    size: 13,
    font: helveticaBold,
    color: rgb(0.71, 0.14, 0.16),
  });

  y -= 18;
  const overviewText = [
    'Through the Scholars Program, Happy Hands partners with compassionate guardians to support',
    'children who have immense academic potential but lack the financial means to remain in school.',
    'Every scholarship covers the complete cost of education including school fees, assessment fees,',
    'approved learning materials, uniforms, daily hot school lunches, and periodic mentorship.'
  ];
  for (const line of overviewText) {
    page.drawText(line, { x: 40, y, size: 10.5, font: helvetica, color: rgb(0.2, 0.2, 0.2) });
    y -= 15;
  }

  // Section 2: Sponsorship Packages
  y -= 10;
  page.drawText('2. Approved Guardian Sponsorship Packages', {
    x: 40,
    y,
    size: 13,
    font: helveticaBold,
    color: rgb(0.71, 0.14, 0.16),
  });

  const packages = [
    { name: 'Full Bloom Package — N690,000 / year (Recommended)', desc: 'Complete annual scholarship covering full tuition, uniforms, textbooks, daily school lunches, and quarterly mentoring.' },
    { name: 'Empowerment Partner — N365,000 / term', desc: 'Termly intervention covering tuition, academic fees, and holistic child development support.' },
    { name: 'Education Essentials Package — N300,000 / year', desc: 'Tuition fees, exercise books, stationery, and mandatory educational supplies for the academic session.' },
    { name: 'Nutrition for Growth Package — N130,000 / term', desc: 'Daily nutritious hot weekday school lunches provided under the Nourish Now intervention.' },
    { name: 'Back-to-School Package — N85,000 / year', desc: 'Tailored school uniforms, durable school bag, leather shoes, socks, and foundational writing kits.' }
  ];

  y -= 16;
  for (const pkg of packages) {
    page.drawText(pkg.name, { x: 40, y, size: 10.5, font: helveticaBold, color: rgb(0.15, 0.15, 0.15) });
    y -= 14;
    page.drawText(pkg.desc, { x: 50, y, size: 9.5, font: helvetica, color: rgb(0.35, 0.35, 0.35) });
    y -= 18;
  }

  // Section 3: Official Bank Details
  y -= 8;
  page.drawText('3. Official Foundation Bank Accounts (Direct & Transparent)', {
    x: 40,
    y,
    size: 13,
    font: helveticaBold,
    color: rgb(0.71, 0.14, 0.16),
  });

  y -= 16;
  page.drawText('Primary Institution: United Bank for Africa (UBA)', { x: 40, y, size: 10.5, font: helveticaBold, color: rgb(0.36, 0.50, 0.17) });
  y -= 14;
  page.drawText('• Account Name: Happy Hands Community Development Foundation', { x: 50, y, size: 9.5, font: helvetica, color: rgb(0.2, 0.2, 0.2) });
  y -= 13;
  page.drawText('• Naira (NGN) Account: 1024567890', { x: 50, y, size: 10, font: helveticaBold, color: rgb(0.71, 0.14, 0.16) });
  y -= 13;
  page.drawText('• USD Domiciliary Account: 3002345678 | GBP Account: 3002345685 | EUR Account: 3002345692', { x: 50, y, size: 9, font: helvetica, color: rgb(0.3, 0.3, 0.3) });

  y -= 16;
  page.drawText('Alternate Option: Guaranty Trust Bank (GTBank)', { x: 40, y, size: 10.5, font: helveticaBold, color: rgb(0.25, 0.25, 0.25) });
  y -= 13;
  page.drawText('• Account: 0625489110 | USSD: *737*2*0625489110#', { x: 50, y, size: 9.5, font: helvetica, color: rgb(0.3, 0.3, 0.3) });

  // Section 4: Contact & Verification
  y -= 22;
  page.drawRectangle({
    x: 40,
    y: y - 50,
    width: width - 80,
    height: 58,
    color: rgb(0.95, 0.96, 0.94),
    borderColor: rgb(0.83, 0.89, 0.76),
    borderWidth: 1,
  });

  page.drawText('GOVERNANCE & DIRECT CONTACT DESK', {
    x: 52,
    y: y - 10,
    size: 9.5,
    font: helveticaBold,
    color: rgb(0.36, 0.50, 0.17),
  });

  page.drawText('CAC Registration: RC 183177 (Nigeria) • Office: 2 Ikotun Road, Igando, Lagos State', {
    x: 52,
    y: y - 24,
    size: 9,
    font: helvetica,
    color: rgb(0.25, 0.25, 0.25),
  });

  page.drawText('Direct Phone: 08121353755, 08188795474 • Email: partnerships@happyhandsfoundation.org', {
    x: 52,
    y: y - 38,
    size: 9,
    font: helvetica,
    color: rgb(0.25, 0.25, 0.25),
  });

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(docsDir, 'HappyHands_Scholars_Sponsorship_Guide.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log(`Generated: ${filePath} (${pdfBytes.length} bytes)`);

  // Also write duplicate copies for reports
  fs.writeFileSync(path.join(docsDir, 'Happy-Hands-Foundation-Annual-Report-2024.pdf'), pdfBytes);
  fs.writeFileSync(path.join(docsDir, 'Happy-Hands-Foundation-Annual-Report-2023.pdf'), pdfBytes);
  fs.writeFileSync(path.join(docsDir, 'Happy-Hands-Foundation-Annual-Report-2022.pdf'), pdfBytes);
}

generateSponsorshipGuide();
