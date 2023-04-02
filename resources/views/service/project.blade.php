@extends('layouts.app') 
@section('static','false') 
@section('navbar', 'navbar-light') 
@section('hero-content')
<div id="main-hero" class="hero-body">
    <div class="container has-text-centered">
        <div class="columns is-vcentered">
            <div class="column is-12 has-text-left">
                <div class="breadcrumbs-container is-hidden-touch mb-10">
                    {{ Breadcrumbs::render() }}
                </div>
                <h1 class="title components-title is-3">
                    Özel Projeler
                </h1>
                <p class="subtitle is-4 components-subtitle is-size-6">
                    Ekipişi Yazılım ve Danışmanlık Hizmetleri, ihtiyaç duyduğunuz özel yazılım geliştirmesinde sizlere net çözümler sunmaktadır.
                    Farklı sektörlere yazılım çözümleri sağlamış ve başarılı deneyimler kazanmış olan Ekipişi, ihtiyaçlarınıza
                    net çözümler üretmek için, tüm süreçlerde tecrübeleriyle sizlere en doğru, en iyi hizmeti sunar.
                </p>
            </div>
        </div>
    </div>
</div>
@endsection
 
@section('content')
<!-- Scrollnav -->
<div id="scrollnavigation" class="scroll-nav-wrapper">
    <div class="container">
        <div class="tabs scrollnav-tabs is-centered">
            <ul>
                <li class="scrollnav-item is-active">
                    <a href="#section1">Özel Yazılım Geliştirme</a>
                </li>
                <li class="scrollnav-item">
                    <a href="#section2">Geliştirme Süreci</a>
                </li>
                <li class="scrollnav-item">
                    <a href="#section3">Yeteneklerimizden Bazıları</a>
                </li>
            </ul>
        </div>
    </div>
</div>
<!-- /Scrollnav -->
<!-- Feature highlight -->
<div class="section is-medium" id="section1">
    <div class="container">
        <!-- Title -->
        <div class="section-title-wrapper">
            <div class="bg-number">1</div>
            <h2 class="title section-title has-text-centered dark-text">Özel Yazılım Geliştirme</h2>
            <div class="subtitle has-text-centered is-tablet-padded">
                İhtiyaç duyduğunuz sisteme özel yazılım çözümü arıyor olabilirsiniz. İş hedeflerinizde beklentileriniz özel olabilir. Değişen
                ve gelişen sektörde işletmenize ve markanıza değer katacak hizmet sağlamayı hedefleyebilirsiniz. Uygulamanızın
                başka sistemlerle entegrasyon sağlayabilmesi, iş akışınıza göre değişmesi veya özel rapor gereksinimleri
                gibi bir çok talepleriniz olabilir. Böyle durumlarda hazır paket programlar yetersiz kalır, yazılımınızın
                güvenli, hızlı, yüksek performanslı ve özel bir arayüz ile sorunsuz olarak çalışabilmesi gibi istek ve ihtiyaçlarınız
                sizi özel yazılım geliştirme hizmeti almaya doğru yöneltir.
            </div>
        </div>
        <div class="content-wrapper">
            <!-- Row -->
            <div class="columns">
                <!-- Featured image -->
                <div class="column is-6">
                    <div>
                        <figure class="image is-4-by-3">
                            <img class="first" src="{{ asset('images/illustrations/programcilar.svg') }}" alt="">
                        </figure>
                    </div>
                </div>
                <!-- Content -->
                <div class="column is-5 is-offset-1 pt-80">
                    <h2 class="title section-subtitle dark-text text-bold is-2">
                        Ekipişi olarak;
                    </h2>
                    <span class="section-feature-description">
                                    <div class="solid-list">
                                        <div class="solid-list-item">
                                            <div class="list-bullet">
                                                <i class="sl sl-icon-check success-text"></i>
                                            </div>
                                            <div class="list-text">
                                                Web Yazılım,
                                            </div>
                                        </div>
                                        <div class="solid-list-item">
                                            <div class="list-bullet">
                                                <i class="sl sl-icon-check success-text"></i>
                                            </div>
                                            <div class="list-text">
                                                Mobil Uygulamar (iOs, Android, Windows Phone),
                                            </div>
                                        </div>
                                        <div class="solid-list-item">
                                            <div class="list-bullet">
                                                <i class="sl sl-icon-check success-text"></i>
                                            </div>
                                            <div class="list-text">
                                                E-Learning (Online Eğitim Yönetimi),
                                            </div>
                                        </div>
                                        <div class="solid-list-item">
                                            <div class="list-bullet">
                                                <i class="sl sl-icon-check success-text"></i>
                                            </div>
                                            <div class="list-text">
                                                B2C (Toptancıdan Perakendeciye ve Son Kullanıcıya),
                                            </div>
                                        </div>
                                        <div class="solid-list-item">
                                            <div class="list-bullet">
                                                <i class="sl sl-icon-check success-text"></i>
                                            </div>
                                            <div class="list-text">
                                                Entegrasyon Çözümleri,
                                            </div>
                                        </div>
                                        <div class="solid-list-item">
                                            <div class="list-bullet">
                                                <i class="sl sl-icon-check success-text"></i>
                                            </div>
                                            <div class="list-text">
                                                Desktop Uygulama Geliştirme
                                            </div>
                                        </div>
                                        <div class="solid-list-item">
                                            <div class="list-bullet">
                                                <i class="sl sl-icon-check success-text"></i>
                                            </div>
                                            <div class="list-text">
                                                IoT Yazılım Geliştirme hizmetleri sunuyoruz.
                                            </div>
                                        </div>
                                    </div>
                                </span>
                </div>
            </div>
            <!-- /Row -->
        </div>
    </div>
</div>
<!-- /Feature highlight -->
<!-- Card section -->
<section class="section is-medium parallax is-relative" id="section2" data-background="{{ asset('images/bg/tech-pattern.png') }}"
    data-color="#000" data-color-opacity="0">
    <div class="container">
        <div class="section-title-wrapper">
            <div class="bg-number">2</div>
            <h2 class="title section-title has-text-centered dark-text text-bold">
                Geliştirme Süreci
            </h2>
            <div class="subtitle has-text-centered is-tablet-padded">
                Yazılım projelerinizin iş süreçlerini profesyonel şekilde yönetiyoruz. Öncelikle proje analizi yapar, projenin ilk örnek
                çalışması hazırlanır ve süreç planlanır. Bu ön izlemeye dayalı olarak planlama yapılır, tasarım tamamlanır,
                yazılım kodlamasının ardından ara yüzü giydirilir, test edilir ve son olarak proje yayına açılır. Proje süreçlerinden
                de anlaşılacağı gibi web yazılım ciddi bir emek ister. Sizin için değerli olduğunu bildiğimiz fikrinizin
                olgunlaşıp hizmete girmesi aşamalarını dikkatlice takip ederiz.
            </div>
        </div>
        <div class="content-wrapper">
            <div class="columns values-cards is-minimal is-vcentered is-gapless is-multiline">
                <!-- Card -->
                <div class="column">
                    <div class="feature-card card-md hover-inset light-bordered has-text-centered mb-20">
                        <div class="card-icon">
                            <i class="im im-icon-Target"></i>
                        </div>
                        <div class="card-title">
                            <h4>Analiz</h4>
                        </div>
                        <div class="card-feature-description">
                            <span class="">
                                            Özel istek ve hedeflerinizi dinler, tespitlerde bulunuruz. Detaylı bir analiz çalışması yapar, en uygun iş planını oluştururuz.
                                        </span>
                        </div>
                    </div>
                </div>
                <!-- Card -->
                <div class="column">
                    <div class="feature-card card-md hover-inset light-bordered has-text-centered mb-20">
                        <div class="card-icon">
                            <i class="im im-icon-Coding"></i>
                        </div>
                        <div class="card-title">
                            <h4>Geliştirme</h4>
                        </div>
                        <div class="card-feature-description">
                            <span class="">
                                            Görsel tasarımlar hazırlanır. Yazılım çalışmaları yapılır. Güvenlik testleri yapılır.
                                        </span>
                        </div>
                    </div>
                </div>
                <!-- Card -->
                <div class="column">
                    <div class="feature-card card-md hover-inset light-bordered has-text-centered mb-20">
                        <div class="card-icon">
                            <i class="im im-icon-Professor"></i>
                        </div>
                        <div class="card-title">
                            <h4>Uygulama</h4>
                        </div>
                        <div class="card-feature-description">
                            <span class="">
                                            Sistem kullanım eğitimi verilir. Test sürecine alınır. Son güncellemeler yapılır ve yayına alınır.
                                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Card section -->
<section class="section is-medium" id="section3">
    <div class="container">
        <div class="section-title-wrapper">
            <div class="bg-number">3</div>
            <h2 class="title section-title has-text-centered dark-text text-bold">
                Yeteneklerimizden Bazıları
            </h2>
        </div>
        <div class="content-wrapper">
            <div class="grid-clients four-grid">
                <div class="columns is-vcentered">
                    <div class="column"></div>
                    <div class="column">
                        <a>
                                        <img class="client" src="{{ asset('images/logos/yetenekler/net-framework.png') }}" alt=".NET Framework">
                                    </a>
                    </div>
                    <div class="column">
                        <a>
                                        <img class="client" src="{{ asset('images/logos/yetenekler/net-core.png') }}" alt=".NET Core">
                                    </a>
                    </div>
                    <div class="column">
                        <a>
                                        <img class="client" src="{{ asset('images/logos/yetenekler/visual-studio.png') }}" alt="Visual Studio">
                                    </a>
                    </div>
                    <div class="column">
                        <a>
                                        <img class="client" src="{{ asset('images/logos/yetenekler/microsoft-sql-server.png') }}" alt="Microsoft SQL Server">
                                    </a>
                    </div>
                    <div class="column"></div>
                </div>
                <div class="columns is-vcentered is-separator">
                    <div class="column"></div>
                    <div class="column">
                        <a>
                                        <img class="client" src="{{ asset('images/logos/yetenekler/microsoft-azure.png') }}" alt="Microsoft Azure">
                                    </a>
                    </div>
                    <div class="column">
                        <a>
                                        <img class="client" src="{{ asset('images/logos/yetenekler/laravel.png') }}" alt="Laravel Framework">
                                    </a>
                    </div>
                    <div class="column">
                        <a>
                                        <img class="client" src="{{ asset('images/logos/yetenekler/mysql.png') }}" alt="mySQL">
                                    </a>
                    </div>
                    <div class="column">
                        <a>
                                        <img class="client" src="{{ asset('images/logos/yetenekler/android.png') }}" alt="Android">
                                    </a>
                    </div>
                    <div class="column"></div>
                </div>
                <div class="columns is-vcentered is-separator">
                    <div class="column"></div>
                    <div class="column">
                        <a>
                                        <img class="client" src="{{ asset('images/logos/yetenekler/ios.png') }}" alt="iOS">
                                    </a>
                    </div>
                    <div class="column">
                        <a>
                                        <img class="client" src="{{ asset('images/logos/yetenekler/windows-phone.png') }}" alt="Windows Phone">
                                    </a>
                    </div>
                    <div class="column">
                        <a>
                                        <img class="client" src="{{ asset('images/logos/yetenekler/html-js-css.png') }}" alt="Html5, Javascript, Css">
                                    </a>
                    </div>
                    <div class="column">
                        <a>
                                        <img class="client" src="{{ asset('images/logos/yetenekler/jquery.png') }}" alt="jQuery">
                                    </a>
                    </div>
                    <div class="column"></div>
                </div>
                <div class="columns is-vcentered is-separator">
                    <div class="column"></div>
                    <div class="column">
                        <a>
                                        <img class="client" src="{{ asset('images/logos/yetenekler/bootstrap.png') }}" alt="Bootstrap">
                                    </a>
                    </div>
                    <div class="column">
                        <a>
                                        <img class="client" src="{{ asset('images/logos/yetenekler/arduino.png') }}" alt="Arduino">
                                    </a>
                    </div>
                    <div class="column">
                        <a>
                                        <img class="client" src="{{ asset('images/logos/yetenekler/bigbluebutton.png') }}" alt="Big Blue Button">
                                    </a>
                    </div>
                    <div class="column">
                        <a>
                                        <img class="client" src="{{ asset('images/logos/yetenekler/adobe-connect.png') }}" alt="Adobe Connect">
                                    </a>
                    </div>
                    <div class="column"></div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection