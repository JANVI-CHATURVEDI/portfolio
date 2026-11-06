import { quote } from "@/lib/portfolio";

export function QuoteSection() {
  return (
    <div className="row">
      <div className="container flush">
        <blockquote className="quote">
          {quote.lang && <p className="quote-verse">{quote.lang}</p>}
          <p className="quote-translation">“{quote.text}”</p>
          <cite className="quote-source">{quote.source}</cite>
        </blockquote>
      </div>
    </div>
  );
}
