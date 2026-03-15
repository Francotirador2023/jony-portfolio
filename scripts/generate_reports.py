import os
from reportlab.lib.pagesizes import LETTER
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle

def create_project_report(filename, project_data, logo_path):
    doc = SimpleDocTemplate(
        os.path.join("c:/Users/jonyr/.gemini/antigravity/scratch/jony-portfolio/public/reports/", filename),
        pagesize=LETTER,
        rightMargin=72, leftMargin=72,
        topMargin=72, bottomMargin=18
    )

    styles = getSampleStyleSheet()
    
    # Custom Styles
    title_style = ParagraphStyle(
        'TitleStyle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=colors.HexColor("#0ea5e9"),
        spaceAfter=12,
        alignment=1 # Center
    )
    
    subtitle_style = ParagraphStyle(
        'SubtitleStyle',
        parent=styles['Heading2'],
        fontSize=14,
        textColor=colors.HexColor("#64748b"),
        spaceAfter=12,
        alignment=1
    )
    
    section_title = ParagraphStyle(
        'SectionTitle',
        parent=styles['Heading3'],
        fontSize=16,
        textColor=colors.HexColor("#0f172a"),
        spaceBefore=15,
        spaceAfter=10
    )

    body_text = styles['BodyText']
    body_text.fontSize = 11
    body_text.leading = 14

    story = []

    # Logo Header
    if os.path.exists(logo_path):
        img = Image(logo_path, width=2*inch, height=2*inch)
        img.hAlign = 'CENTER'
        story.append(img)
        story.append(Spacer(1, 0.2*inch))

    # Title Section
    story.append(Paragraph("INFORME TÉCNICO DE PROYECTO", subtitle_style))
    story.append(Paragraph(project_data['title'], title_style))
    story.append(Spacer(1, 0.3*inch))

    # Executive Summary
    story.append(Paragraph("Resumen Ejecutivo", section_title))
    story.append(Paragraph(project_data['description'], body_text))

    # Technical Details
    story.append(Paragraph("Tecnologías y Herramientas", section_title))
    tech_list = " | ".join(project_data['tags'])
    story.append(Paragraph(f"<b>Stack Tecnológico:</b> {tech_list}", body_text))

    # Implementation & Impact (Dynamic Content based on project)
    story.append(Paragraph("Implementación y Resultados", section_title))
    story.append(Paragraph(project_data['impact'], body_text))

    # Footer/Branding info
    story.append(Spacer(1, 0.5*inch))
    story.append(Paragraph("<hr/>", body_text))
    footer_text = "<b>JOFASTSA SOLUTIONS</b> - Consultoría Especializada en Automatización y Datos<br/><i>Generado de forma automática por el sistema de portafolio</i>"
    story.append(Paragraph(footer_text, ParagraphStyle('Footer', parent=body_text, alignment=1, fontSize=8, textColor=colors.gray)))

    doc.build(story)

# Projects Data with Impact Narrative
projects_data = [
    {
        "filename": "heart_disease_report.pdf",
        "title": "Heart Disease Clustering & Prediction",
        "description": "Desarrollo de un sistema híbrido que combina aprendizaje no supervisado (K-Means) para segmentar pacientes por perfiles de riesgo y modelos supervisados (Random Forest) para predecir la probabilidad de fallo cardíaco.",
        "tags": ["Python", "Scikit-Learn", "Pandas", "K-Means", "Random Forest"],
        "impact": "El modelo logró una precisión del 92% en la detección temprana de anomalías. La segmentación permitió identificar 4 perfiles críticos de pacientes, optimizando la asignación de recursos médicos en entornos de triaje."
    },
    {
        "filename": "etl_automation_report.pdf",
        "title": "Automatización de Procesos ETL",
        "description": "Pipeline robusto para la ingesta de datos de ventas desde múltiples fuentes heterogéneas. El sistema automatiza la limpieza, validación de esquemas y carga en base de datos centralizada.",
        "tags": ["Python", "SQL", "Pandas", "Automation"],
        "impact": "Se redujo el tiempo de procesamiento manual en un 85%, eliminando errores humanos en la carga de datos financieros. El sistema maneja volúmenes superiores a 500k registros diarios con latencia mínima."
    },
    {
        "filename": "vet_dashboard_report.pdf",
        "title": "Dashboard de Gestión Veterinaria",
        "description": "Solución de Business Intelligence diseñada para una cadena de clínicas veterinarias. Centraliza datos operativos y financieros para ofrecer una visión 360 del negocio.",
        "tags": ["Power BI", "DAX", "ETL", "Data Modeling"],
        "impact": "La implementación de métricas DAX avanzadas permitió detectar una caída del 15% en la retención de clientes en servicios específicos, facilitando la toma de decisiones estratégicas basadas en datos en tiempo real."
    },
    {
        "filename": "crypto_etl_report.pdf",
        "title": "Modern Data Stack (Crypto ELT)",
        "description": "Arquitectura moderna orientada a eventos para el seguimiento de mercados de criptoactivos. Utiliza Airflow para la orquestación y dBT para la capa de transformación semántica.",
        "tags": ["Airflow", "Docker", "dBT", "Postgres", "Metabase"],
        "impact": "Se estableció un repositorio único de verdad (SSOT) para el análisis de activos volátiles. El uso de dBT redujo la duplicidad de código SQL en un 40% y mejoró la trazabilidad de los datos (Linaje)."
    },
    {
        "filename": "mlops_price_predictor_report.pdf",
        "title": "MLOps Real Estate Predictor",
        "description": "Pipeline de Machine Learning productivizado bajo estándares MLOps. Incluye validación de datos en el Edge, versionado de modelos y servido mediante API REST escalable.",
        "tags": ["Python", "FastAPI", "Docker", "Streamlit", "Scikit-Learn"],
        "impact": "El despliegue dockerizado garantiza un entorno reproducible y una latencia de inferencia menor a 200ms. La integración con Streamlit permite a usuarios no técnicos interactuar con el modelo de IA con facilidad."
    }
]

logo_path = "c:/Users/jonyr/.gemini/antigravity/scratch/jony-portfolio/src/assets/logo_jofastsa.png"

for p in projects_data:
    create_project_report(p['filename'], p, logo_path)
    print(f"Generado: {p['filename']}")
