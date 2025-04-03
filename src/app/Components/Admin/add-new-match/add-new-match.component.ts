import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LeafletMapComponent } from '../../leaflet-map/leaflet-map.component';
import { SharedService } from '../../../Services/shared.service';

@Component({
  selector: 'app-add-new-match',
  imports: [CommonModule, ReactiveFormsModule, LeafletMapComponent],
  templateUrl: './add-new-match.component.html',
  styleUrl: './add-new-match.component.css'
})
export class AddNewMatchComponent implements OnInit {
  selectedStadiumLocation: string = 'Cairo, Egypt';
  showMap: boolean = true;

  matchForm: FormGroup;

  leagues = [
    'Egyptian Premier League',
    'Egypt Cup',
    'Egyptian Super Cup',
    'CAF Champions League',
    'CAF Confederation Cup'
  ];

  teams = [
    { name: 'Al Ahly', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Al_Ahly_SC_logo.svg/285px-Al_Ahly_SC_logo.svg.png' },
    { name: 'Zamalek', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Zamalek_SC_logo.svg/285px-Zamalek_SC_logo.svg.png' },
    { name: 'Pyramids FC', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Pyramids_FC_%282020%29.png/285px-Pyramids_FC_%282020%29.png' },
    { name: 'Al Masry', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Al_Masry_SC_logo.png/225px-Al_Masry_SC_logo.png' },
    { name: 'National Bank of Egypt', logo: 'https://upload.wikimedia.org/wikipedia/lt/e/e4/National_Bank_of_Egypt_SC.png' },
    { name: 'Pharco', logo: 'https://tmssl.akamaized.net//images/wappen/head/47058.png?lm=1730721431' },
    { name: 'Petrojet', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Petrojet_SC_2017.png/225px-Petrojet_SC_2017.png' },
    { name: 'Ceramica Cleopatra', logo: 'https://upload.wikimedia.org/wikipedia/en/9/94/Ceramica_Cleopatra_FC_logo.png' },
    { name: 'Haras El Hodoud', logo: 'https://upload.wikimedia.org/wikipedia/en/d/db/Haras_El-Hodood_SC_%28logo%29.png' },
    { name: 'Zed', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/39/ZED_FC_logo.png/225px-ZED_FC_logo.png' },
    { name: "Tala'ea El Gaish", logo: 'https://pbs.twimg.com/media/EP3l0XuWsAIEiXA.png' },
    { name: 'El Gouna', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/El_Gouna_FC_Logo_2017.png' },
    { name: 'Smouha', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Smouha_SC_logo.png/270px-Smouha_SC_logo.png' },
    { name: 'Al Ittihad Alexandria', logo: 'https://upload.wikimedia.org/wikipedia/en/7/71/Al-Ittihad_Alexandria_Club_logo.png' },
    { name: 'Ismaily', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ismaily_SC_logo.png' },
    { name: 'Ghazl El Mahala', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Ghazl_El_Mahalla_Logo.png' },
    { name: 'Modern Sport', logo: 'https://tmssl.akamaized.net//images/wappen/head/68770.png?lm=1720464854' },
    { name: 'ENPPI', logo: 'https://upload.wikimedia.org/wikipedia/en/2/22/ENPPI_Club_Logo.png' },
  ];

  stadiumData = [
    { name: 'Cairo International Stadium', city: 'Cairo' },
    { name: '30 June Stadium', city: 'Cairo' },
    { name: 'Petro Sport Stadium', city: 'Cairo'},
    { name: 'Borg El Arab Stadium', city: 'Alexandria' },
    { name: 'Suez Stadium', city: 'Suez' },
    { name: 'Al Salam Stadium', city: 'Cairo' },
    { name: 'Cairo Military Academy Stadium', city: 'Cairo' },
    { name: 'Military Academy Stadium', city: 'Cairo'},
    { name: 'El Gouna Stadium', city: 'El Gouna' },
    { name: 'Borg El Arab Stadium', city: 'Alexandria'},
    { name: 'Ismailia Stadium', city: 'Ismailia' },
    { name: 'Petro Sport Stadium', city: 'Cairo' }
];

  stadiums = this.stadiumData.map(stadium => stadium.name);

  constructor(private fb: FormBuilder,private sharedService: SharedService) {
    this.matchForm = this.fb.group({
      league: ['', Validators.required],
      homeTeam: ['', Validators.required],
      awayTeam: ['', Validators.required],
      matchDate: ['', Validators.required],
      matchTime: ['', Validators.required],
      stadium: ['', Validators.required],
      location: ['Cairo', Validators.required]
    });
  }

  ngOnInit(): void {
    this.matchForm.get('stadium')?.valueChanges.subscribe(stadium => {
      if (stadium) {
        this.updateMapLocation(stadium);
      } else {
        this.resetMapToDefault();
      }
    });
  }

  getHomeTeamLogo(): string | null {
    const homeTeamName = this.matchForm.get('homeTeam')?.value;
    if (!homeTeamName) return null;
    const team = this.teams.find(t => t.name === homeTeamName);
    return team ? team.logo : null;
  }

  getAwayTeamLogo(): string | null {
    const awayTeamName = this.matchForm.get('awayTeam')?.value;
    if (!awayTeamName) return null;
    const team = this.teams.find(t => t.name === awayTeamName);
    return team ? team.logo : null;
  }

  private updateMapLocation(stadiumName: string): void {
    this.showMap = false;
    const stadium = this.stadiumData.find(s => s.name === stadiumName);
    
    setTimeout(() => {
      this.selectedStadiumLocation = stadiumName;
      if (stadium) {
        this.matchForm.patchValue({ location: stadium.city });
      }
      this.showMap = true;
    }, 1);
  }

  private resetMapToDefault(): void {
    this.showMap = false;
    setTimeout(() => {
      this.selectedStadiumLocation = 'Cairo, Egypt';
      this.matchForm.patchValue({ location: 'Cairo' });
      this.showMap = true;
    }, 1);
  }

  getAvailableHomeTeams(): any[] {
    const awayTeam = this.matchForm.get('awayTeam')?.value;
    if (!awayTeam) {
      return this.teams;
    }
    return this.teams.filter(team => team.name !== awayTeam);
  }

  getAvailableAwayTeams(): any[] {
    const homeTeam = this.matchForm.get('homeTeam')?.value;
    if (!homeTeam) {
      return this.teams; // Return all teams if no home team is selected
    }
    return this.teams.filter(team => team.name !== homeTeam);
  }

  onSubmit(): void {
    if (this.matchForm.valid) {
      // Get the form values
      const formData = this.matchForm.value;
      
      // Get the home team logo
      const homeTeamName = this.matchForm.get('homeTeam')?.value;
      const homeTeam = this.teams.find(t => t.name === homeTeamName);
      const homeTeamLogo = homeTeam ? homeTeam.logo : null;
      
      // Get the away team logo
      const awayTeamName = this.matchForm.get('awayTeam')?.value;
      const awayTeam = this.teams.find(t => t.name === awayTeamName);
      const awayTeamLogo = awayTeam ? awayTeam.logo : null;
      
      // Create the complete data object to send
      const matchData = {
        ...formData,
        homeTeamLogo: homeTeamLogo,
        awayTeamLogo: awayTeamLogo
      };
      
      console.log('Form submitted:', matchData);
      alert('Match added successfully!');
      this.sharedService.addMatch(matchData);

      // Reset the form
      this.matchForm.reset({
        location: 'Cairo'
      });
    } else {
      this.matchForm.markAllAsTouched();
    }
  }
}