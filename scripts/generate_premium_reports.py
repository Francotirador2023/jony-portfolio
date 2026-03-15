import os
from reportlab.lib.pagesizes import LETTER
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, PageBreak

def create_enhanced_report(filename, project_data, logo_path, assets_dir):
    report_path = os.path.join("c:/Users/jonyr/.gemini/antigravity/scratch/jony-portfolio/public/reports/", filename)
    doc = SimpleDocTemplate(
        report_path,
        pagesize=LETTER,
        rightMargin=50, leftMargin=50,
        topMargin=50, bottomMargin=30
    )

    styles = getSampleStyleSheet()
    
    # Custom Styles
    brand_color = colors.HexColor("#0ea5e9")
    dark_color = colors.HexColor("#0f172a")
    muted_color = colors.HexColor("#64748b")
    success_color = colors.HexColor("#10b981")

    title_style = ParagraphStyle(
        'MainTitle',
        parent=styles['Heading1'],
        fontSize=28,
        textColor=brand_color,
        spaceAfter=12,
        fontName='Helvetica-Bold',
        alignment=1
    )
    
    tagline_style = ParagraphStyle(
        'TagLine',
        parent=styles['Normal'],
        fontSize=12,
        textColor=muted_color,
        fontName='Helvetica-Oblique',
        alignment=1,
        spaceAfter=30
    )
    
    h2_style = ParagraphStyle(
        'H2',
        parent=styles['Heading2'],
        fontSize=18,
        textColor=dark_color,
        spaceBefore=20,
        spaceAfter=15,
        fontName='Helvetica-Bold',
        borderPadding=(0, 0, 5, 0),
        borderWidth=0,
        borderColor=brand_color
    )

    body_style = ParagraphStyle(
        'BodyText',
        parent=styles['Normal'],
        fontSize=11,
        leading=16,
        textColor=colors.HexColor("#334155"),
        spaceAfter=10
    )

    metrics_style = ParagraphStyle(
        'Metrics',
        parent=body_style,
        fontSize=12,
        fontName='Helvetica-Bold',
        textColor=success_color
    )

    story = []

    # --- Header Segment ---
    if os.path.exists(logo_path):
        img = Image(logo_path, width=2.5*inch, height=2.5*inch)
        img.hAlign = 'CENTER'
        story.append(img)
        story.append(Spacer(1, 0.2*inch))

    story.append(Paragraph("CASO DE ÉXITO DE SOLUCIONES DE DATOS", tagline_style))
    story.append(Paragraph(project_data['title'], title_style))
    story.append(Spacer(1, 0.4*inch))

    # --- Section: Business Problem ---
    story.append(Paragraph("Problemática de Negocio", h2_style))
    story.append(Paragraph(project_data['problem'], body_style))
    
    # --- Section: The Solution ---
    story.append(Paragraph("Solución Implementada por JOFASTSA", h2_style))
    story.append(Paragraph(project_data['solution'], body_style))
    
    # Large Banner Image of the Project
    project_banner = os.path.join(assets_dir, project_data['banner'])
    if os.path.exists(project_banner):
        story.append(Spacer(1, 0.1*inch))
        img = Image(project_banner, width=6*inch, height=3.5*inch)
        img.hAlign = 'CENTER'
        story.append(img)
        story.append(Spacer(1, 0.2*inch))
    
    # --- Section: Impact & ROI ---
    story.append(PageBreak())
    story.append(Paragraph("Impacto y Resultados (ROI)", h2_style))
    
    # Key Results Table
    story.append(Paragraph("<b>Métricas de Desempeño Logradas:</b>", body_style))
    for metric in project_data['results']:
        story.append(Paragraph(f"• {metric}", metrics_style))
    
    story.append(Spacer(1, 0.3*inch))

    # Analytics Chart
    chart_path = os.path.join(assets_dir, project_data['chart'])
    if os.path.exists(chart_path):
        story.append(Paragraph("<b>Visualización de Eficiencia/Crecimiento:</b>", body_style))
        img = Image(chart_path, width=5*inch, height=3.5*inch)
        img.hAlign = 'CENTER'
        story.append(img)
        story.append(Spacer(1, 0.2*inch))

    # --- Footer ---
    story.append(Spacer(1, 0.8*inch))
    story.append(Paragraph("<hr/>", body_style))
    footer_text = "<font size='10' color='#0ea5e9'><b>JOFASTSA SOLUTIONS</b></font><br/>Especialistas en Automatización B2B | Consultoría de Datos Estratégica<br/><i>E-mail: contacto@jofastsa.com | Website: jofastsa.com</i>"
    story.append(Paragraph(footer_text, ParagraphStyle('Footer', parent=body_style, alignment=1, fontSize=8, textColor=muted_color)))

    doc.build(story)

# Full Narrative Data for B2B Success Cases
projects_narrative = [
    {
        "filename": "heart_disease_report.pdf",
        "title": "Predictor de Riesgo Cardíaco con IA",
        "problem": "Los sistemas de triaje manuales en clínicas son lentos y propensos a errores humanos, lo que retrasa la atención crítica en pacientes con alto riesgo coronario. La falta de segmentación clara impide priorizar emergencias de forma eficiente.",
        "solution": "JOFASTSA implementó un sistema de inteligencia artificial híbrido que utiliza K-Means para agrupar pacientes por perfiles sintomáticos y Random Forest para predecir fallos futuros con alta precisión.",
        "banner": "heart_disease_banner.png",
        "chart": "chart_analytics.png",
        "results": ["Precisión predictiva del 92.5%", "Reducción del 40% en tiempo de diagnóstico", "Identificación de perfiles críticos en tiempo real"],
        "tags": ["Python", "Machine Learning", "AI Health"]
    },
    {
        "filename": "etl_automation_report.pdf",
        "title": "Optimización masiva de Pipelines ETL",
        "problem": "Una empresa de retail procesaba sus cierres de ventas de forma manual en Excel, tardando más de 12 horas diarias y generando discrepancias financieras críticas debido a datos duplicados o inconsistentes.",
        "solution": "Diseñamos un ecosistema automatizado con Python y SQL que extrae, valida y carga datos de múltiples canales de venta directamente a un almacén centralizado sin intervención humana.",
        "banner": "etl_banner.png",
        "chart": "chart_efficiency.png",
        "results": ["Ahorro estimado de $15,000 USD/año en costos operativos", "Integridad de los datos del 99.9%", "Disponibilidad de reportes en 5 minutos"],
        "tags": ["Data Engineering", "Automation", "Python"]
    },
    {
        "filename": "vet_dashboard_report.pdf",
        "title": "Estrategia de BI para Gestión Veterinaria",
        "problem": "Clínicas con múltiples sedes sufrían de 'puntos ciegos' financieros: no sabían qué servicios eran más rentables ni por qué bajaba la retención de clientes en ciertas áreas geográficas.",
        "solution": "Implementación de un sistema de Business Intelligence en Power BI con métricas DAX avanzadas. Creamos un tablero de mando que consolida el rendimiento financiero, operativo y de fidelización.",
        "banner": "bi_dashboard.png",
        "chart": "chart_roi.png",
        "results": ["Identificación de servicios con bajo margen de utilidad", "Incremento del 12% en la retención de clientes post-análisis", "Visión 360 del negocio en tiempo real"],
        "tags": ["Power BI", "DAX", "Business Strategy"]
    },
    {
        "filename": "crypto_etl_report.pdf",
        "title": "Data Stack Moderno para Análisis Cripto",
        "problem": "La volatilidad de los datos de criptoactivos requiere una latencia de datos mínima. Los sistemas tradicionales fallaban en escalar ante picos de tráfico y carecían de auditoría sobre las transformaciones.",
        "solution": "JOFASTSA construyó una arquitectura basada en dBT y Airflow sobre contenedores Docker. El sistema permite transformaciones modulares y un linaje de datos claro para auditoría financiera en tiempo real.",
        "banner": "mds_banner.png",
        "chart": "chart_analytics.png",
        "results": ["Escalabilidad horizontal garantizada con Docker", "Trazabilidad completa de cada transformación analítica", "Sincronización de datos con 0% de pérdida ante fallos"],
        "tags": ["Airflow", "dBT", "Containerization"]
    },
    {
        "filename": "mlops_price_predictor_report.pdf",
        "title": "Ecosistema MLOps: Predicción Inmobiliaria",
        "problem": "Los modelos de predicción de precios perdían precisión rápidamente debido a cambios en el mercado (data drift). Re-entrenar y desplegar nuevos modelos tomaba semanas al equipo técnico.",
        "solution": "Desarrollamos un entorno MLOps completo que automatiza el ciclo de vida del modelo: desde la ingesta hasta el despliegue con FastAPI. Permite despliegues continuos y monitoreo de salud del modelo.",
        "banner": "mlops_banner.png",
        "chart": "chart_roi.png",
        "results": ["Despliegue de actualizaciones en minutos, no semanas", "Latencia de respuesta en API menor a 150ms", "Automatización del 100% del ciclo de re-entrenamiento"],
        "tags": ["FastAPI", "MLOps", "Docker", "Streamlit"]
    }
]

logo_path = "c:/Users/jonyr/.gemini/antigravity/scratch/jony-portfolio/src/assets/logo_jofastsa.png"
assets_dir = "c:/Users/jonyr/.gemini/antigravity/scratch/jony-portfolio/src/assets/"

print("Iniciando generación de reportes B2B Premium...")
for p in projects_narrative:
    create_enhanced_report(p['filename'], p, logo_path, assets_dir)
    print(f"✓ Reporte finalizado: {p['filename']}")
print("\n¡Todos los reportes han sido generados con éxito!")
