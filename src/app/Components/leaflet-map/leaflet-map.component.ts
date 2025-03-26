import { Component, AfterViewInit, Input, ElementRef, ViewChild, inject, input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leaflet-map',
  imports: [CommonModule],
  templateUrl: './leaflet-map.component.html',
  styleUrl: './leaflet-map.component.css'
})
export class LeafletMapComponent implements AfterViewInit {
  private map!: L.Map;
  @Input() locationName: string = ''; // ✅ Change this to any location
  @Input() styleTxt: { [key: string]: string } = { height: '100%', width: '50%' };


  private http = inject(HttpClient); // ✅ Correct way to inject HttpClient

  private initMap(lat: number, lon: number): void {
    this.map = L.map('map').setView([lat, lon], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([lat, lon], {
      icon: L.divIcon({ className: 'custom-div-icon', html: '' }) // Empty div icon
    }).addTo(this.map)
      .bindPopup(`📍 ${this.locationName}<br> Location found!`)
      .openPopup();
  }

  private getCoordinates(location: string): void {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;

    this.http.get<any[]>(url).subscribe(data => {
      if (data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        this.initMap(lat, lon);
      } else {
        console.error('Location not found!');
      }
    });
  }

  ngAfterViewInit(): void {
    this.getCoordinates(this.locationName); // ✅ Convert "Maadi" to lat/lon
  }


  private userMarker: any;

  public getUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          // Center the map on the user's location
          this.map.setView([userLat, userLng], 13);

          // Add a marker for the user's location
          if (this.userMarker) {
            this.userMarker.setLatLng([userLat, userLng]);
          } else {
            this.userMarker = L.marker([userLat, userLng]).addTo(this.map)
              .bindPopup('You are here!')
              .openPopup();
          }
        },
        (error) => {
          console.error('Error getting user location:', error);
          alert('Unable to retrieve your location. Please ensure location services are enabled.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

}
