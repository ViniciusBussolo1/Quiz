interface ObjectIncorrectAnswers {
  answers_a: string
  answers_b: string
  answers_c: string
}

export type Json = ObjectIncorrectAnswers | null

export interface Database {
  public: {
    Tables: {
      Questions: {
        Row: {
          corret_answers: string | null
          created_at: string
          id: string
          incorrect_answers: Json | null
          question: string | null
        }
        Insert: {
          corret_answers?: string | null
          created_at?: string
          id?: string
          incorrect_answers?: Json | null
          question?: string | null
        }
        Update: {
          corret_answers?: string | null
          created_at?: string
          id?: string
          incorrect_answers?: Json | null
          question?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
