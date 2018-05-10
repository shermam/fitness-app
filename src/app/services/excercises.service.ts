import { Injectable } from '@angular/core';
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExcercisesService {

  constructor() { }

  getExercises(): Observable<any> {
    return of({
      inferiores: [
        "Abdução de pernas",
        "Adução de pernas",
        "Afundo",
        "Agachamento",
        "Agachamento lateral com barra",
        "Agachamento livre",
        "Agachamento na máquina",
        "Agachamento no Smith Machine",
        "Agachamento pela frente",
        "Agachamento sumô",
        "Avanço",
        "Bom dia",
        "Cadeira Extensora",
        "Cadeira flexora",
        "Coice",
        "Elevação de panturrilha em pé",
        "Elevação de panturrilha em pé unilateral",
        "Elevação de panturrilha sentado",
        "Flexão de joelhos com o corpo",
        "Flexão de joelhos em pé",
        "Flexão de joelhos sentado",
        "Flexão de perna em pé",
        "Ham Raise",
        "Hiperextensão lombar em hiperextensora",
        "Hiperextensão reversa",
        "Leg press 45º",
        "Leg Press vertical",
        "Levantamento Terra",
        "Mesa flexora",
        "Panturrilha burrinho",
        "Ponte inversa",
        "Siff no Smith Machine",
        "Sissy Squat",
        "Stiff",
      ],
      superiores: [
        "Barra com pegada supinada",
        "Barra fixa com pegada aberta",
        "Elevação lateral curvado",
        "Elevação lateral sentado",
        "Elevação lateral unilateral com halteres",
        "Elevação lateral unilateral curvado na polia baix",
        "Elevação lateral unilateral inclinado com halteres",
        "Elevação lateral unilateral sentado com halteres",
        "Elevação unilateral na polia baixa",
        "Extensão de tríceps em banco declinado com barra",
        "Extensão de tríceps na corda",
        "Extensão de tríceps unilateral sentado com halteres (pegada neutra)",
        "Mergulho",
        "Puxada alta pela frente",
        "Remada cavalinho",
        "Remada curvada na barra",
        "Remada na polia baixa",
        "Remada unilateral com halteres",
        "Rosca concentrada",
        "Rosca direta na barra",
        "Rosca direta na barra em W com pegada aberta",
        "Rosca direta na barra em W com pegada fechada",
        "Rosca inclinada com haltere",
        "Rosca no cabo",
        "Rosca Scott com halteres",
        "Supino",
        "Supino com halteres",
        "Supino declinado com barra",
        "Supino declinado com halteres",
        "Supino inclinado com halteres",
        "Tríceps na polia alta (barra em “v”)",
        "Tríceps unilateral na polia alta com pegada reversa"
      ]
    });
  }
}
