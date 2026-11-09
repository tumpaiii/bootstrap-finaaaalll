"use client";
import { cn } from "@/lib/utils";
import { photos } from "@/lib/meetup-assets";
interface VenueProps {
  className?: string;
}
export default function Venue({ className }: VenueProps) {
  return (
    <section id="venue" className={cn("venue-section", className)}>
      <div className="venue-stage section-pad">
        <div className="venue-heading">
          <span className="micro">SAN FRANCISCO, CALIFORNIA</span>
          <h2>
            A REAL PLACE.
            <br />
            <span>REAL CONNECTIONS.</span>
          </h2>
          <p>
            Step away from your screen.
            <br />
            Find your people in the city.
          </p>
        </div>
        <div className="venue-simple-photo">
          <img src={photos.city} alt="San Francisco Golden Gate Bridge" loading="lazy" />
          <span>San Francisco, California</span>
        </div>
        <div className="venue-details">
          <div>
            <span className="micro">PROPOSED VENUE</span>
            <h3>The Pearl</h3>
            <p>
              601 19th Street, San Francisco
              <br />
              California 94107, USA
            </p>
          </div>
          <div>
            <span className="micro">COME FOR THE DAY</span>
            <p>
              Saturday, March 13, 2027
              <br />
              09:30 AM – 03:00 PM PT
            </p>
          </div>
          <a
            className="button dark"
            href="https://www.google.com/maps/search/?api=1&query=The+Pearl+601+19th+Street+San+Francisco"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
