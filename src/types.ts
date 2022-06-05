export interface Data {
  title:             string;
  pages:             Page[];
  page_next_text:    string;
  page_prev_text:    string;
  complete_text:     string;
  completed_heading: string;
  completed_text:    string;
  completed_actions: CompletedAction[];
}

export interface CompletedAction {
  label: string;
  url:   string;
}

export interface Page {
  name?:      string;
  title?:     string;
  subtitle?: string;
  questions:  Question[];
}

export interface Question {
  code:                      string;
  name:                      string;
  type:                      InputType;
  is_required:               boolean;
  public_description:        string;
  choices:                   Choice[];
  filter_choices_by_answer?: null;
  place_holder?:             null;
}

export interface Choice {
  yes: string;
  no:  string;
}

export enum No {
  Nein = "nein",
}

export enum Yes {
  Ja = "ja",
}

export enum InputType {
  Dropdown = "dropdown",
  Radiogroup = "radiogroup",
}
