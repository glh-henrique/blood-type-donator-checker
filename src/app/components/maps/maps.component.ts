import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.scss'
})
export class MapsComponent implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  markers: Array<{ position: google.maps.LatLngLiteral; label: string }> = [];
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    maxZoom: 16,
    minZoom: 4
  };

  ngOnInit(): void {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.loadDynamicCenters(this.center.lat, this.center.lng);
        },
        () => {
          this.center = { lat: 38.7223, lng: -9.1393 };
          this.loadDynamicCenters(this.center.lat, this.center.lng);
        }
      );
    } else {
      this.center = { lat: 38.7223, lng: -9.1393 };
      this.loadDynamicCenters(this.center.lat, this.center.lng);
    }
  }

  private loadDynamicCenters(lat: number, lng: number): void {
    const overpassUrl = 'https://overpass-api.de/api/interpreter';
    const query =
      '[out:json];(' +
      'node["healthcare"="blood_donation"](around:20000,' + lat + ',' + lng + ');' +
      'node["amenity"="blood_donation"](around:20000,' + lat + ',' + lng + ');' +
      ');out body;';
    fetch(overpassUrl, {
      method: 'POST',
      body: query,
      headers: { 'Content-Type': 'text/plain' }
    })
      .then((response) => response.json())
      .then((data) => {
        this.markers = data.elements.map((element: any) => ({
          position: { lat: element.lat, lng: element.lon },
          label: element.tags?.name || 'Centro de doacao'
        }));
      })
      .catch((error) => {
        console.error('Erro ao obter dados da Overpass API', error);
        this.markers = [];
      });
  }
}
